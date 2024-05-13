import axios from '../../instance/instance';

export async function getSampleUser() {
  try {
    const { data } = await axios.get('/sample/user');
    return data;
  } catch (error) {
    console.error('Error fetching sample user:', error);
    throw error;
  }
}

interface Link {
  imageSource?: string;
  image_source: string;
  createdAt?: string;
  created_at: string;
}

export async function getSampleFolder() {
  try {
    const { data } = await axios.get('/sample/folder');
    if (data && data.folder && data.folder.links) {
      data.folder.links.forEach((link: Link) => {
        if (link.imageSource) {
          link.image_source = link.imageSource;
          delete link.imageSource;
        }
        if (link.createdAt) {
          link.created_at = link.createdAt;
          delete link.createdAt;
        }
      });
    }
    return data;
  } catch (error) {
    console.error('Error fetching sample folder:', error);
    throw error;
  }
}

export async function getFolder(id: string) {
  try {
    const { data } = await axios.get(`/users/${id}/folders`);
    return data;
  } catch (error) {
    console.error('Error fetching folder:', error);
    throw error;
  }
}

export async function getFolderList(id: string, folderId: number) {
  if (folderId) {
    try {
      const query = `/${id}/links?folderId=${folderId}`;
      const { data } = await axios.get(`/users${query}`);
      return data.data;
    } catch (error) {
      console.error('Error fetching folderList:', error);
      throw error;
    }
  } else if (!folderId) {
    try {
      const query = `/${id}/links`;
      const { data } = await axios.get(`/users${query}`);
      return data.data;
    } catch (error) {
      console.error('Error fetching folderList:', error);
      throw error;
    }
  }
}

export async function getUser(accessToken: string) {
  try {
    const { data } = await axios.get('/users', {
      headers: {
        Authorization: accessToken,
      },
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function postSignIn(id: string, password: string) {
  try {
    const { data } = await axios.post('/sign-in', {
      email: id,
      password: password,
    });
    localStorage.setItem('token', data.data.accessToken);
  } catch (error) {
    console.error('Error fetching sign-in:', error);
    throw error;
  }
}
