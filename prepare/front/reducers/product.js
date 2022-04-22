// todo
import produce from "immer";
import { dummySectionProduct_03 } from "../data/DummySectionProducts";

export const initialState = {
  id: 1,
  title: "",
  section: [
    {
      no: 0,
      name: "",
      shortDescription: "",
      listImageUrl: "",
      originalPrice: 0,
      discountedPrice: 0,
      discountRate: 0,
      isBuyNow: false,
      isPurchaseStatus: true,
      isGiftable: true,
      isSoldOut: false,
      soldOutTitle: "",
      soldOutText: "",
      canRestockNotify: true,
      tags: [
        {
          name: "",
          type: "",
        },
      ],
      sticker: null,
      meta: {
        isFixed: false,
        position: 1,
      },
    },
  ],
};

const LOAD_PRODUCT_LIST = "LOAD_PRODUCT_LIST";

export const loadProductList = {
  type: LOAD_PRODUCT_LIST,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PRODUCT_LIST: {
        draft.productList = [dummySectionProduct_03, ...state];
        draft.productListUpdated = true;
        break;
      }
      default:
        break;
    }
  });

export default reducer;
