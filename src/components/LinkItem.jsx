import { Link } from "react-router-dom";

const LinkItem = ({ url, title }) => {
  return (
    <Link className="link-item" to={url} target="_blank">
      <img src={`${url}//favicon.ico`} alt="" />
      <p>{title}</p>
    </Link>
  );
};

export default LinkItem;
