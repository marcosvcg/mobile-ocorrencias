import ReactPaginate from "react-paginate"; // dependencia externa!
import "./css/Pagination.css"

interface Props {
    pageCount: number;
    currentPage: number;
    handlePageClick: (event: { selected: number }) => void;
}

function Pagination({ pageCount, currentPage, handlePageClick }: Props) {
  return (
    <nav>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        onPageChange={handlePageClick}
        forcePage={currentPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </nav>
  );
}

export default Pagination;