const FaceBookShare = ({ children, url }) => {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
      "facebook-share-dialog",
      "width=626,height=436"
    );
    return false;
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default FaceBookShare;
