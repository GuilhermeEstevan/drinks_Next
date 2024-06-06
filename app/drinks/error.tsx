"use client";

const error = (error: any) => {
  return (
    <span>{error.error.message}</span>
  )
}

export default error