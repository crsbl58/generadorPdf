import React from "react";

import styles from "./Generic.module.scss";
import conversions from "@/utils/conversion";

const Col = ({
  className,
  boxShadow,
  overflow,
  position,
  width,
  widthText = null,
  maxWidth,
  height,
  heightText = null,
  children,
  gap,
  padding = [],
  alignItems,
  justifyContent,
  backgroundColor,
}: any) => {
  let widthCurrent = `${conversions.toRem(width)}rem`;
  if (widthText !== null) {
    widthCurrent = widthText;
  }

  let heightCurrent = `${conversions.toRem(height)}rem`;
  if (heightText !== null) {
    heightCurrent = heightText;
  }

  const combinedClasses = `${styles.col} ${className}`;
  return (
    <div
      className={combinedClasses}
      style={{
        boxShadow,
        position,
        overflow,
        backgroundColor,
        width: widthCurrent,
        maxWidth: `${conversions.toRem(maxWidth)}rem`,
        height: heightCurrent,
        gap: `${conversions.toRem(gap)}rem`,
        alignItems,
        justifyContent,
        padding: `${conversions.toRem(padding[0])}rem 
         ${conversions.toRem(padding[1])}rem 
         ${conversions.toRem(padding[2])}rem 
         ${conversions.toRem(padding[3])}rem`,
      }}
    >
      {children}
    </div>
  );
};

const Row = ({
  borderRadius = [],
  key,
  flexWrap,
  position,
  children,
  gap,
  width,
  maxWidth,
  widthText = null,
  height,
  backgroundColor,
  padding = [],
  alignItems,
  justifyContent,
  margin = [],
}: any) => {
  let widthCurrent = `${conversions.toRem(width)}rem`;
  if (widthText !== null) {
    widthCurrent = widthText;
  }

  return (
    <div
      key={key}
      className={styles.row}
      style={{
        flexWrap,
        position,
        width: widthCurrent,
        maxWidth: `${conversions.toRem(maxWidth)}rem`,
        height,
        backgroundColor,
        gap: `${conversions.toRem(gap)}rem`,
        alignItems,
        justifyContent,
        padding: `${conversions.toRem(padding[0])}rem 
        ${conversions.toRem(padding[1])}rem 
        ${conversions.toRem(padding[2])}rem 
        ${conversions.toRem(padding[3])}rem`,
        borderRadius: `${conversions.toRem(borderRadius[0])}rem 
        ${conversions.toRem(borderRadius[1])}rem 
        ${conversions.toRem(borderRadius[2])}rem 
        ${conversions.toRem(borderRadius[3])}rem`,
        margin: `${conversions.toRem(margin[0])}rem 
        ${conversions.toRem(margin[1])}rem 
        ${conversions.toRem(margin[2])}rem 
        ${conversions.toRem(margin[3])}rem`,
      }}
    >
      {children}
    </div>
  );
};

const Container = ({
  heightText = "100%",
  children,
  position,
  justifyContent,
  alignItems,
  flexFlow,
  padding = [],
  type,
  className,
  templateColumns,
  templateRows,
}: any) => {
  return (
    <div
      className={className}
      style={{
        position,
        width: "100%",
        height: heightText,
        justifyContent,
        alignItems,
        display: type,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        flexFlow,
        padding: `${conversions.toRem(padding[0])}rem 
        ${conversions.toRem(padding[1])}rem 
        ${conversions.toRem(padding[2])}rem 
        ${conversions.toRem(padding[3])}rem`,
      }}
    >
      {children}
    </div>
  );
};

const Grid = ({
  children,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  alignItems,
  justifyContent,
  margin = [],
  padding = [],
  gridAutoRows,
}: any) => {
  return (
    <div
      style={{
        gridAutoRows: gridAutoRows,
        padding: `${conversions.toRem(padding[0])}rem 
            ${conversions.toRem(padding[1])}rem 
            ${conversions.toRem(padding[2])}rem 
            ${conversions.toRem(padding[3])}rem`,
        margin: `${conversions.toRem(margin[0])}rem 
            ${conversions.toRem(margin[1])}rem 
            ${conversions.toRem(margin[2])}rem 
            ${conversions.toRem(margin[3])}rem`,
        display: "grid",
        gridColumnStart: columnStart,
        gridColumnEnd: columnEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        alignItems,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
};

export { Col, Row, Container, Grid };
