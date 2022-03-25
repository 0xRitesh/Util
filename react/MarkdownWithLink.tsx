/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import Link from "./Link";

const SPLIT_PER_LINK = /(\[[^\]]+\]\([^\)]+\))/;
const CONTAINS_LINK = /^[\[]/;
const EXTRACT_LINK = /\[([^\]]+)\]\(([^\)]+)\)/;

// declare children explicitly to restrict them to be of type string only
interface Props {
  children: string;
  className?: string;
  id?: string;
}

const MarkdownWithLink: React.FC<Props> = ({ children, className, id }) => (
  <p className={className} id={id}>
    {children.split(SPLIT_PER_LINK).map((subString: string, i: number) => {
      if (!CONTAINS_LINK.test(subString)) return subString;

      const [_, text, link] = subString.split(EXTRACT_LINK);
      return (
        <Link key={i} to={link}>
          {text}
        </Link>
      );
    })}
  </p>
);

export default MarkdownWithLink;
