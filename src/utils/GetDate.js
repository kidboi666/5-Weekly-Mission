function GetDate({ createdAt }) {
    const createdAtDate = new Date(createdAt).toLocaleDateString();

    return createdAtDate;
}

export default GetDate;
