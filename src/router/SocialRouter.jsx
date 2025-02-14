import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const SocialMain = lazy(() => import("../pages/social/MySocialPage"));
const SocialList = lazy(() => import("../pages/social/SocialListPage"));
const SocialBookList = lazy(() => import("../pages/social/SocialBookListPage"));
const SocialBookDetail = lazy(() =>
  import("../pages/social/SocialBookDetailPage")
);

// main : 내 프로필, 소셜 검색
// list : 팔로워, 팔로잉 목록
// book/list/:id : 유저 소셜 책장
// book/detail/:id/:isbn : 유저 소셜 팔로워/팔로잉 책장

const SocialRouter = () => {
  return (
    <Routes>
      {/* 내 소셜 메인 */}
      <Route path="" element={<Navigate replace to={"main"} />} />
      <Route
        path="main"
        element={
          <Suspense fallback={<LoadingPage />}>
            <SocialMain />
          </Suspense>
        }
      />
      {/* 내 소셜 팔로워/팔로잉 리스트 */}
      <Route
        path="list"
        element={
          <Suspense fallback={<LoadingPage />}>
            <SocialList />
          </Suspense>
        }
      />
      {/* 유저 소셜 책장 */}
      <Route
        path="bookshelf/:id"
        element={
          <Suspense fallback={<LoadingPage />}>
            <SocialBookList />
          </Suspense>
        }
      />
      {/* 유저 소셜 팔로워/팔로잉 책장 */}
      <Route
        path="bookshelf/book/:id/:bookId"
        element={
          <Suspense fallback={<LoadingPage />}>
            <SocialBookDetail />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default SocialRouter;
