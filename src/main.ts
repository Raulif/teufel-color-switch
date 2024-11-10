import { DataSetVariant, Variant } from "./types/types";
import { getFormattedPrice } from './helpers/price';
import { getVariants } from './api/variants';
import { getTranslation } from "./helpers/translations";
import { BASE_PRODUCT_NAME } from "./constants";
import "../style.scss";

const selectors = {
  button: ".button",
  productDetails: ".product-details",
  image: ".product-details__image",
  name: ".product-details__name",
  price: ".product-details__price",
  variantsContainer: ".product-details__variants",
  variantButton: ".product-details__variants__button",
};

const toggleCta = (active: boolean = false) => {
  const button = document.querySelector(selectors.button) as HTMLButtonElement;
  if (!button) return;
  button.disabled = !active;
  button.ariaDisabled = (!active).toString();
}

const displaySelectedVariant = (variantData?: DataSetVariant) => {
  const productDetails = document.querySelector(selectors.productDetails);
  if (!productDetails || !variantData) return;
  const { productPrice, imageUrl, productVariant } = variantData;
  const imageElement = document.querySelector(selectors.image) as HTMLImageElement;
  if (imageElement) {
    imageElement.src = `${import.meta.env.VITE_BASE_IMAGE_URL}${imageUrl}`;
    imageElement.alt = `${productVariant} ${BASE_PRODUCT_NAME}`;
  }
  const priceElement = document.querySelector(selectors.price) as HTMLSpanElement;
  if (priceElement) {
    priceElement.textContent = getFormattedPrice(productPrice);
  }
}

const toggleSelectedVariant = (variantId?: string) => {
  const buttons = document.querySelectorAll(selectors.variantButton) as NodeListOf<HTMLButtonElement>;
  if (!buttons.length || !variantId) return;
  buttons.forEach((button: HTMLButtonElement) => {
    const selected = button.dataset.id === variantId;
    button.ariaSelected = selected.toString();
  });
}

const setSelectedVariant = (variant: DataSetVariant) => {
  toggleSelectedVariant(variant.id);
  displaySelectedVariant(variant);
  toggleCta(variant.inStock === 'true');
}

const onVariantClick = async (event: Event) => {
  const button = event.target as HTMLButtonElement;
  if (!button) return;
  setSelectedVariant(button.dataset as DataSetVariant);
}

const setInitialVariant = () => {
  const buttons = document.querySelectorAll(selectors.variantButton) as NodeListOf<HTMLButtonElement>;
  const initialVariant = Array.from(buttons).filter((button: HTMLButtonElement) => !button.disabled)[0];
  if (!initialVariant) {
    // No variants available
    toggleCta(false);
    return;
  };
  setSelectedVariant(initialVariant.dataset as DataSetVariant);
}

const createVariantItem = (variant: Variant): HTMLLIElement => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.classList.add("product-details__variants__button");
  const label = `${variant.productVariant} ${BASE_PRODUCT_NAME}`
  button.title = label;
  button.ariaLabel = label;
  button.style.backgroundColor = variant.productColour ?? '';
  button.dataset.id = variant.id ?? '';
  button.dataset.productPrice = variant.productPrice?.toString() ?? '';
  button.dataset.imageUrl = variant.imageUrl ?? '';
  button.dataset.productVariant = variant.productVariant ?? '';
  button.dataset.inStock = variant.inStock?.toString() ?? 'false';
  button.addEventListener("click", onVariantClick);
  li.appendChild(button);
  return li;
}

const initVarianSelector = async () => {
  const variants = await getVariants();
  if (!variants?.length) {
    // No variants available
    toggleCta();
    return;
  };

  const container = document.querySelector(selectors.variantsContainer);
  variants.forEach((variant: Variant) => {
    const item = createVariantItem(variant);
    container?.appendChild(item);
  });
  setInitialVariant();
}

const initTranslations = () => {
  const button = document.querySelector(selectors.button) as HTMLButtonElement;
  if (!button) return;
  button.innerHTML = getTranslation("ctaLabel");
}

const init = async () => {
  const product = document.querySelector(selectors.productDetails);
  if (!product) return;
  initVarianSelector();
  initTranslations();
}

init();
