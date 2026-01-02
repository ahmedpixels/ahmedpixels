import { createContext, useContext, useState, ReactNode } from "react";
import QuoteModal from "@/components/QuoteModal";

interface QuoteModalContextType {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isOpen: boolean;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
};

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = () => setIsOpen(true);
  const closeQuoteModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal, isOpen }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
};