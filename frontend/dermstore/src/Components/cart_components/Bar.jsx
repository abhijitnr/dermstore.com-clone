import React from "react";
import BarCSS from "./Bar.module.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Bar = () => {
  return (
    <>
      <Alert status="success" style={{ position: "relative", zIndex: "100" }}>
        <AlertIcon fontSize={10} />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Bar;
