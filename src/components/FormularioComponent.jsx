import {useForm} from "../hooks/useForm.js"
export const FormularioComponent = () => {

    const initalForm = { username: '', email: '', password: '' }
    const {formState, onInputChange} = useForm(initalForm)

    const {username, email, password}  = formState
    const onSubmit = event => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userEmail"> Email </label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name='email'
                    value={email}
                    onChange={onInputChange}
                >

                </input>
            </div>

            <div className="form-group">
                <label htmlFor="username"> Username </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    name='username'
                    value={username}
                    onChange={ onInputChange}
                    >

                </input>
            </div>

            <div className="form-group">
                <label htmlFor="password"> Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                ></input>
            </div>
            <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
    )
}
