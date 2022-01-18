function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center offcanvas-backdrop show"
      style={{ zIndex: 2000 }}
    >
      <div
        className="spinner-border text-warning"
        style={{ width: '4rem', height: '4rem' }}
      ></div>
      <span className="text-warning ms-3">Please Wait </span>
    </div>
  );
}

export default Spinner;
