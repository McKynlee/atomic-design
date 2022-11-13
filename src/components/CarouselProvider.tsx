import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface CarouselProviderContext {
  selected: number;
  select(index: number): void;
  next(): void;
  previous(): void;
  count(): number;
  addSection(order: number, section: React.ReactNode): void;
  sections: Map<number, React.ReactNode>;
}

const CarouselContext = createContext<CarouselProviderContext>(null);

interface CarouselProviderProps {
  children: ReactNode;
};

export const CarouselProvider: React.FC<CarouselProviderProps> = (props) => {
const [selected, setSelected] = useState<number>(0);
const [sections, setSections] = useState<Map<number, React.ReactNode>>(new Map());

const count = useCallback(() => sections.size, [sections]);
const select = (index: number) => setSelected(index);

const next = useCallback(
  () => setSelected((index) => (index + 1) % sections.size),
  [sections, setSelected]
);

const previous = useCallback(
  () => setSelected((index) => (
    index === 0 ? sections.size -1 : index - 1)),
  [sections, setSelected]
);

const addSection = useCallback(
  (order: number, section: React.ReactNode) =>
  setSections((sections) => {
    sections.set(order, section);
    return sections;
  }),
  [setSections]
);

return (
  <CarouselContext.Provider
  value={{
    count, select, selected, next, previous, addSection, sections
  }}
  >
    {props.children}
  </CarouselContext.Provider>
)
}

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if(context == undefined) {
    throw new Error('useCarouselContext must be called within a <CarouselProvider />');
  }

  return context;
};