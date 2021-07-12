import React from "react";

type BarProps = {
  bar: Record<string, unknown> | null;
};

const Bar = ({ bar }: BarProps): JSX.Element => {
  return <>{bar !== null ? <div>I am a bar</div> : null}</>;
};

export default Bar;
