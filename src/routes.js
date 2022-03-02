import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProducListPage from "./pages/ProductListPage";
import ProducActionPage from "./pages/ProductActionPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProducListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProducActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProducActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
];

export default routes;