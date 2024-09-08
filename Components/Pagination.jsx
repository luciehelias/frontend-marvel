import "../Styles/Pagination.css";

const Pagination = ({ pageNumber, handlePageNumber, arraySize }) => {
  return (
    <div className="pagination">
      {pageNumber > 1 && (
        <>
          <button onClick={() => handlePageNumber("previous")}>
            Page précedente
          </button>
          <p>{`Page ${pageNumber}`}</p>
        </>
      )}
      {arraySize > 0 && (
        <button onClick={() => handlePageNumber("next")}>Page suivante </button>
      )}
    </div>
  );
};

export default Pagination;
