export interface ProductOptions {
  id: number;
  name: string;
}

export interface ProductListValues {
  id: number;
  name: string;
  price: number;
  options?: ProductOptions[];
  imageUrl?: string | null | undefined;
  description?: string | null | undefined;
  isAvailable?: boolean | undefined;
}

export interface Sales {
  name: string;
  price: number;
  option: string;
  quantity: number;
  createdAt: string;
}

export interface SalesInfo {
  productId: number;
  createdAt: string;
  sales: Sales[];
}

export const productSalesInfo = {
  productId: 50,
  createdAt: new Date(2022, 0, 1, 18, 20, 10).toUTCString(),
  sales: [
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 2, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 2, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 0, 2, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 2, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 2, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 0, 2, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 3, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 3, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 0, 3, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 3, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 3, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 0, 3, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 4, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 4, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 0, 4, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 4, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 4, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 4, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 0, 4, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 10, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 10, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 0, 10, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 10, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 10, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 10, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 0, 10, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 2, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 2, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 0, 2, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 2, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 2, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 2, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 0, 2, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 3, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 0, 3, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 0, 3, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 3, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 0, 3, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 0, 3, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 0, 3, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 1, 4, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 1, 4, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 1, 4, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 1, 4, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 1, 4, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 4, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 1, 4, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 1, 10, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 1, 10, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 1, 10, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 1, 10, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 1, 10, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 1, 10, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 1, 10, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 2, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 2, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 2, 2, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 2, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 2, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 2, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 2, 2, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 3, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 3, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 2, 3, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 3, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 3, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 3, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 2, 3, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 4, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 4, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 2, 4, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 4, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 4, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 4, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 2, 4, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 10, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 2, 10, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 2, 10, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 10, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 2, 10, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 2, 10, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 2, 10, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 2, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 2, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 5, 2, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 2, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 2, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 2, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 5, 2, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 3, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 3, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 5, 3, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 3, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 3, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 3, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 5, 3, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 4, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 4, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 5, 4, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 4, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 4, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 4, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 5, 4, 19, 0, 2).toUTCString(),
    },

    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 10, 11, 30, 30).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 11, 40, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 2,
      createdAt: new Date(2022, 5, 25, 11, 40, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 11, 40, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 12, 0, 40).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "매운맛",
      quantity: 2,
      createdAt: new Date(2022, 5, 25, 12, 2, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 12, 2, 20).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 13, 30, 13).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 13, 30, 15).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 25, 16, 23, 18).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 17, 11, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 17, 12, 10).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 10,
      createdAt: new Date(2022, 5, 25, 18, 0, 0).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "아주 매운 맛",
      quantity: 1,
      createdAt: new Date(2022, 5, 25, 18, 0, 1).toUTCString(),
    },
    {
      name: "테스트 상품",
      price: 20000,
      option: "기본",
      quantity: 5,
      createdAt: new Date(2022, 5, 25, 19, 0, 2).toUTCString(),
    },
  ],
};
