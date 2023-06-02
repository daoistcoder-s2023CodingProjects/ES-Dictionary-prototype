import axios from "axios";

const handleSearch = async () => {

    // Searching a Definition using Merriam Webster
    const MerriamWebKey = '98a198a3-a200-490a-ad48-98ac95b46d80'
    const MerriamWebUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/Dick?key=${MerriamWebKey}`


    // Trying to get Response in Merriam Webster URL
    try {
      const response = await axios.get(MerriamWebUrl)
      const firstDefinition = response.data[0].shortdef
      const PartOfSpeech = response.data[0].fl
      const Phonetic = response.data[0].hwi.prs[0].mw
      console.log(firstDefinition)

    } catch (error) {
      console.log(error)
    }

    // Trying to Search a picture related in the term search
    // const UnsplashKey = 'gVfJPtlmzZ4XoaVB4p5SdGe0ILjssdLMcDqR3FH5gn0';
    // const UnsplahUrl = `https://api.unsplash.com/photos/random?query=${TermSearch}&client_id=${UnsplashKey}`;

    // try {
    //   const response = await axios.get(UnsplahUrl);
    //   const imageUrl = response.data.urls.regular;
    // } catch (error) {
    //   console.log(error);

    // }
  };

  handleSearch();