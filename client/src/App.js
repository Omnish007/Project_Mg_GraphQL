// https://www.youtube.com/watch?v=BcLNfwF04Kw&t=3282s
// 1:28:13

import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
});

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Header />
                <div className="container">Hello World</div>;
            </ApolloProvider>
        </>
    );
}

export default App;
