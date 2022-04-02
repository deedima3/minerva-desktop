export interface PaginationProps{
    count : number;
    perPage : number;
    currentPage : any;
    onPageChange : any;
    pageNumber : any;
    slicedData: any[];
    pagination: any[];
    changePage: (page: number, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};