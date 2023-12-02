import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { furbysReducer } from "../store/features/furbys/furbysSlice";
import furbysApiMock from "../mocks/furbysApiMock";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { PropsWithChildren } from "react";
import { uiReducer } from "../store/features/ui/uiSlice";
import { store } from "../store";

export const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { furbysState: furbysReducer, uiState: uiReducer },
    preloadedState: {
      furbysState: { furbys: furbysApiMock },
      uiState: { isLoading: false },
    },
  });

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { furbysState: furbysReducer, uiState: uiReducer },
    preloadedState: {
      furbysState: { furbys: furbysApiMock },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};
