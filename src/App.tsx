import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false);
  function handleOPenNewTransactionModal() {
    setisNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOPenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
