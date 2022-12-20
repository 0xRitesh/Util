// modified from https://twitter.com/kentcdodds/status/1229864732737191936

import React, { useEffect, useState } from "react";

const FallbackUI: React.FC<{}> = () => {
  const [showTooLong, setShowTooLong] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTooLong(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Spinner />
      {showTooLong ? "ah!" : null}
    </div>
  );
};

export default FallbackUI;
