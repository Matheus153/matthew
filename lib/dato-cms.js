
const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN

async function fetchCmsAPI (query, { variables: technologies } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      technologies
    })
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }

  return json.data
}



export async function getAllTechnologies() {
  const data = await fetchCmsAPI(`
        {
            allTechnologies {
                id
                defaultVisible
                name
                logo {
                    url(imgixParams: {fm: png, fit: crop, h: "120", w: "120"})
                }
            }
        }
    `)

  return data.allTechnologies
}

export async function getAllSeries() {
  const data = await fetchCmsAPI(`
    {
      allSeries {
        id
        name
        slug
        description
        seriesType
        thumbUrl {
          id
          url
        }
        seasons {
          id
        }
      }
    }
  `);

  return data.allSeries;
}

export async function getAllFullSeries() {
  const data = await fetchCmsAPI(`
  {
    allSeries {
      id
      name
      slug
      description
      updatedAt
      thumbUrl {
        url
      }
      features {
        name
      }
      seasons {
        id
        name
        slug
        description
        episodes {
          id
          name
          slug
          description
          videoUrl
          author {
            id
          }
          videosTime
          thumbUrl {
            id
          }
        }
      }
    }
  }
`);

  return data.allSeries;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllTechnologies, getAllSeries, getAllFullSeries }
