interface ITecnology {
  name: string;
  experience: number;
  frameWorks: string[];
}

interface ITecnologies {
  tecnologies: ITecnology[];
}

const tecs: ITecnologies = {
  tecnologies: [
    {
      name: "php",
      experience: 2,
      frameWorks: ["xamarim", "magento"],
    },
  ],
};
