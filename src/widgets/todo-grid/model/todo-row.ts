// DataGrid 한 행이에요. todo와 user(이름)를 합친 모양이라 widget에 둬요.
export interface TodoRow {
  id: number;
  title: string;
  userName: string;
  status: 'done' | 'open';
}
