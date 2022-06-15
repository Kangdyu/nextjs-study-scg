import { HTMLAttributes, ReactNode } from "react";

interface Props<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

function List<T>({ items, renderItem, ...props }: Props<T>) {
  return <ul {...props}>{items.map(renderItem)}</ul>;
}

export default List;
