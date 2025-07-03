// src/config/table-columns-config.ts
export type ColumnConfig = {
    id: number;
    column_name: string;
    checked: boolean;
    order: number;
  };
  
  export type TableConfig = {
    title: string;
    columns: ColumnConfig[];
  };
  
  export const TABLES_CONFIG: Record<string, TableConfig> = {
    brands: {
      title: "brands",
      columns: [
        { id: 1, column_name: "id", checked: true, order: 1 },
        { id: 2, column_name: "lang_name", checked: true, order: 2 },
        { id: 3, column_name: "description_en", checked: true, order: 3 },
        { id: 4, column_name: "Actions", checked: true, order: 4 }
      ]
    },
    taxes: {
      title: "taxes",
      columns: [
        { id: 1, column_name: "id", checked: true, order: 1 },
        { id: 2, column_name: "lang_name", checked: true, order: 2 },
        { id: 3, column_name: "amount", checked: true, order: 3 },
        { id: 4, column_name: "Actions", checked: true, order: 4 }
      ]
    },
    categories: {
      title: "categories",
      columns: [
        { id: 1, column_name: "id", checked: true, order: 1 },
        { id: 2, column_name: "lang_name", checked: true, order: 2 },
        { id: 3, column_name: "description_en", checked: true, order: 3 },
        { id: 4, column_name: "code", checked: true, order: 4 },
        { id: 5, column_name: "Actions", checked: true, order: 5 }
      ]
    },  
    // subCategories: {
    //   title: "Sub Categories",
    //   columns: [
    //     { id: 1, column_name: "id", checked: true, order: 1 },
    //     { id: 2, column_name: "lang_name", checked: true, order: 2 },
    //     { id: 3, column_name: "description_en", checked: true, order: 3 },
    //     { id: 4, column_name: "category_name_en", checked: true, order: 4 },
  
    //     { id: 5, column_name: "code", checked: true, order: 5 },
    //     { id: 6, column_name: "Actions", checked: true, order: 6 }
    //   ]
    // },
    units: {
      title: "units",
      columns: [
        { id: 1, column_name: "id", checked: true, order: 1 },
        { id: 2, column_name: "lang_name", checked: true, order: 2 },
        { id: 3, column_name: "short_name_en", checked: true, order: 3 },
        { id: 4, column_name: "multiplier", checked: true, order: 4 },
        { id: 5, column_name: "Actions", checked: true, order: 5 }
      ]
    },
    warranties: {
      title: "warranties",
      columns: [
        { id: 1, column_name: "id", checked: true, order: 1 },
        { id: 2, column_name: "lang_name", checked: true, order: 2 },
        { id: 3, column_name: "duration", checked: true, order: 3 },
        { id: 4, column_name: "duration_type", checked: true, order: 4 },
        { id: 5, column_name: "Actions", checked: true, order: 5 }
      ]
    },
  customers: {
      title: "customers",
      columns: [
        { id: 1, column_name: "id", checked: true, order: 1 },
        { id: 2, column_name: "full_name_en", checked: true, order: 2 },
        { id: 3, column_name: "email", checked: true, order: 3 },
        { id: 4, column_name: "mobile", checked: true, order: 4 },
        { id: 5, column_name: "branch_name_en", checked: true, order: 5 }
      ]
    },
    
    // products: {
    //   title: "Products",
    //   columns: [
    //     { id: 1, column_name: "id", checked: true, order: 1 },
    //     { id: 2, column_name: "lang_name", checked: true, order: 2 },
    //     { id: 3, column_name: "sku", checked: true, order: 3 },

    //     { id: 4, column_name: "Actions", checked: true, order: 4}
    //   ]
    // }
  };

  
  
  export const getTableConfig = (tableName: string): TableConfig => {
    return TABLES_CONFIG[tableName.toLowerCase()] || {
      title: tableName,
      columns: []
    };
  };