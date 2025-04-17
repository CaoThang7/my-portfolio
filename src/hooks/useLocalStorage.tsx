"use client";
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
  const [storedValue, setStoredValue] = useState<T | null>(null);

  // Đọc localStorage khi đã mounted
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.log(error);
      setStoredValue(initialValue);
    }
  }, [key]);

  // Cập nhật localStorage khi storedValue thay đổi
  useEffect(() => {
    if (storedValue === null) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  // fallback ban đầu để tránh mismatch
  const setValue: (value: SetValue<T>) => void = (value) => {
    setStoredValue((prevValue) =>
      typeof value === "function"
        ? (value as (val: T) => T)(prevValue as T)
        : value
    );
  };

  // Trả fallback để tránh mismatch ban đầu
  return [storedValue !== null ? storedValue : initialValue, setValue];
}

export default useLocalStorage;
