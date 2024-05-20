function getDate({ createdAt }: { createdAt: string }) {
  const createdAtDate = new Date(createdAt).toLocaleDateString();

  return createdAtDate;
}

export default getDate;
