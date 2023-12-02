import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import MyFurbysPage from "../../pages/MyFurbysPage/MyFurbysPage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <AppStyled>
      {uiState.isLoading && <Loading />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/my-furbys" />} />
        <Route path="my-furbys" element={<MyFurbysPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
