import React from "react";

function isReactNodeNull(value: React.ReactNode | undefined | null) {
  if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
}

function isReactNodeNotNull(value: React.ReactNode | undefined | null) {
  return !isReactNodeNull(value);
}

const TypeIsExtensions = {
  isReactNodeNull,
  isReactNodeNotNull,
};

export default TypeIsExtensions;
