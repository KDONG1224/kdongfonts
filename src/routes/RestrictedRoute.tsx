// import React, { useEffect, useState, Suspense } from 'react';

// import { RouteProps, Route, useHistory } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { StoreState } from 'modules';

// import { PrivateRoute } from 'routes/PrivateRoute';
// import { NotFoundResult, WarningResult, PageLoader } from 'components';
// import { routes } from 'routes';
// import { Switch } from 'react-router';
// import {
//   ROUTE_ROOT,
//   ROUTE_SIGNUP_TERMS,
//   ROUTE_SIGNUP_INFO,
//   ROUTE_SIGNUP_COMPLETE,
//   ROUTE_SIGNUP_CHECKED,
//   ROUTE_FIND_ID_COMPLETE,
//   ROUTE_FIND_PASSWORD_COMPLETE
// } from 'routes/const';
// import { getAppServerCheckAction } from 'modules/page';
// import { pathAction } from 'modules/ui';
// import { LazyLoginPage } from 'pages';
// import { setQuestionActiveAction } from 'modules/customer';

// interface RestrictedRouteProps extends RouteProps {
//   isLogin: boolean | undefined;
//   isPhoneAuth: boolean;
//   pathname: string;
// }

// const RestrictedRoute = (props: RestrictedRouteProps) => {
//   const { isLogin, isPhoneAuth, pathname } = props;
//   const { inspection } = useSelector((state: StoreState) => state.pageState);
//   const { pageLoading, current, prev } = useSelector(
//     (state: StoreState) => state.uiState
//   );
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [restrictedPath, setRestrictedPath] = useState(false);
//   const serverChcek = inspection.inspection;

//   const restrictPathList = [
//     ROUTE_SIGNUP_TERMS,
//     ROUTE_SIGNUP_INFO,
//     ROUTE_SIGNUP_COMPLETE,
//     ROUTE_SIGNUP_CHECKED,
//     ROUTE_FIND_ID_COMPLETE,
//     ROUTE_FIND_PASSWORD_COMPLETE
//   ];

//   const pathCheck = (list: string[]) => {
//     const check = list.some(path => path.trim() === pathname.trim());
//     return check;
//   };

//   const appServerCheck = () => {
//     dispatch(getAppServerCheckAction.request());
//   };

//   const restricePashListCheck = () => {
//     if (!isPhoneAuth) {
//       setRestrictedPath(pathCheck(restrictPathList));
//     }
//   };

//   const pathSet = (payload: {
//     current?: string | undefined;
//     prev?: string | undefined;
//   }) => {
//     dispatch(pathAction(payload));
//   };

//   useEffect(() => {
//     appServerCheck();
//     if (pathname) {
//       setTimeout(() => window.scrollTo(0, 0));
//     }
//     restricePashListCheck();
//     pathSet({ current: pathname });

//     return () => {
//       pathSet({ prev: pathname });
//     };
//   }, [pathname]);

//   const restrictedPathHomeMove = () => {
//     if (restrictedPath) {
//       alert('잘못된 접근입니다');
//       history.push(ROUTE_ROOT);
//     }
//   };

//   useEffect(() => {
//     restrictedPathHomeMove();
//   }, [restrictedPath]);

//   const questionActiveTab = () => {
//     const questionEditOrDetail =
//       current.indexOf('customer-onetoone-detail') > -1 ||
//       current.indexOf('customer-onetoone/edit') > -1;
//     if (!questionEditOrDetail && prev === '/customer-onetoone') {
//       dispatch(
//         setQuestionActiveAction({
//           questionTab: 'one1'
//         })
//       );
//     }
//   };

//   useEffect(() => {
//     questionActiveTab();
//   }, [current]);

//   return (
//     <Suspense fallback={!pageLoading && <PageLoader />}>
//       <Switch>
//         {routes.public.map((item, index) => (
//           <Route
//             key={index}
//             path={item.path}
//             fallback={NotFoundResult}
//             component={serverChcek ? WarningResult : item.component}
//             exact
//           />
//         ))}
//         {routes.private.map((item, index) => (
//           <PrivateRoute
//             key={index}
//             path={item.path}
//             fallback={LazyLoginPage}
//             component={item.component}
//             isPermission={isLogin}
//             exact
//           />
//         ))}
//         <Route path='*' component={NotFoundResult} />
//       </Switch>
//     </Suspense>
//   );
// };

// export default RestrictedRoute;

import React from 'react';

const RestrictedRoute = () => {
  return (
    <div>
      <span>ssasdasd</span>
    </div>
  );
};
