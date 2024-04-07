export async function fetchSampleFolder() {
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
        if (!response.ok) {
            throw new Error('fetch Error');
        }
        const sampleFolders = await response.json();
        return sampleFolders;
    } catch (error) {
        return error
    }
}