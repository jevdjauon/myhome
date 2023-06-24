const Hamburger = ({ styleName, clickFunction }) => {
  return (
    <button className={styleName} onClick={clickFunction}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
