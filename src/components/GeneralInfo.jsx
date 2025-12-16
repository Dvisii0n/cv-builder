import { Input } from "./Input.jsx";

function GeneralInfo({ data, setData }) {
    function changeName(e) {
        setData({ ...data, name: e.target.value });
    }

    function changeEmail(e) {
        setData({ ...data, email: e.target.value });
    }

    function changePhone(e) {
        setData({ ...data, phone: e.target.value });
    }
    return (
        <form className="general-info">
            <p className="form-header">General Info</p>
            <Input label="Name" value={data.name} onChange={changeName}></Input>
            <Input
                label="Email"
                value={data.email}
                onChange={changeEmail}
            ></Input>
            <Input
                label="Phone Number"
                value={data.phone}
                onChange={changePhone}
            ></Input>
        </form>
    );
}

export { GeneralInfo };
