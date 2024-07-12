export type PlotProperty = {
  plot_id: string;
  status: string;
  section: string;
  row: string;
  plot_no: string;
  cemetery_id: number;
  price: number;
  persons: Person[];
  show_price: number;
  cemetery_name: string;
  roi: any[];
};

export type Person = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  date_of_death: string;
  age: string;
  returned_serviceman: boolean;
  is_featured: boolean | null;
  story: string | null;
  is_admin: boolean | null;
  life_chronicle: string | null;
};
