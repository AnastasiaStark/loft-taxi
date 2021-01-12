import React from 'react'

export const AutoContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const logIn = (email, password) => {
        if (email === "test@test.com" && password === "123123") {
            return
        }

        setIsLoggedIn(true)
    };

    const logOut = () => {
        setIsLoggedIn(false)
    };

    const context = {logIn, logOut, isLoggedIn};

    return (
        <AutoContext.Provider value={context}>
            {children}
        </AutoContext.Provider>
    );
};

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AutoContext.Consumer>
                    {
                        context => {
                            return <WrappedComponent {...context} {...this.props}/>
                        }
                    }
                </AutoContext.Consumer>
            )
        }
    }
}
