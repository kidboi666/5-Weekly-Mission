function GetDate({ createdAt }: { createdAt: string }) {
  const createdAtDate = new Date(createdAt).toLocaleDateString();

  return createdAtDate;
}

export default GetDate;
