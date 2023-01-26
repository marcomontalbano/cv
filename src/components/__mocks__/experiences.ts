export default {
  asList: [
    {
      endDate: '2016-06-30',
      url: 'https://example.com/web-developer',
      startDate: '2016-05-09',
      visible: true,
      title: 'Web Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: 'Binasco, Milan (Italy)',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
    {
      endDate: '2017-10-10',
      url: 'https://example.com/web-developer',
      startDate: '2017-09-09',
      visible: true,
      title: 'Senior Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: 'Binasco, Milan (Italy)',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
  ],
  withoutVisibleFalse: [
    {
      endDate: '2016-06-30',
      url: 'https://example.com/web-developer',
      startDate: '2016-05-09',
      visible: false,
      title: 'Web Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: 'Binasco, Milan (Italy)',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
    {
      endDate: '2017-10-10',
      url: 'https://example.com/web-developer',
      startDate: '2017-09-09',
      visible: true,
      title: 'Senior Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: 'Binasco, Milan (Italy)',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
  ],
  withSameMonth: [
    {
      endDate: '2016-06-01',
      url: 'https://example.com/web-developer',
      startDate: '2016-06-30',
      visible: true,
      title: 'Web Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: 'Binasco, Milan (Italy)',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
  ],
  withoutAddress: [
    {
      endDate: '2016-06-01',
      url: 'https://example.com/web-developer',
      startDate: '2016-06-30',
      visible: true,
      title: 'Web Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: '',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
  ],
  withoutEndDate: [
    {
      endDate: '',
      url: 'https://example.com/web-developer',
      startDate: '2016-06-30',
      visible: true,
      title: 'Web Developer',
      company: {
        id: '63a71671-6695-43e8-ac4d-bae71bd6a62b',
        name: 'John Doe SpA',
        url: 'https://example.com',
        address: '',
      },
      tags: ['web', 'developer'],
      id: 'f39d7c2d-5985-4b78-bfea-4f04acb0b906',
      description:
                'Vestibulum bibendum arcu ligula.\n\nUt felis magna, luctus imperdiet mollis a, ornare in risus. Mauris lacus nibh, pretium eu iaculis vitae, viverra et lectus. Etiam faucibus, odio vel suscipit condimentum, velit velit commodo nunc, sed vulputate velit sem sed nibh. Fusce at turpis sed odio tristique cursus. **Cras sed urna** non arcu molestie mollis eu in lacus. Vivamus eget sem mi. Nulla sit amet dui non elit dapibus maximus. Suspendisse in fermentum nisl. Maecenas posuere magna at aliquet auctor. Nunc egestas scelerisque semper. *Pellentesque sem elit*, lobortis in ligula non, pulvinar consectetur elit. [Maecenas vel mi bibendum](https://example.com), scelerisque augue vel, cursus libero.\n\n* Donec a nulla congue, facilisis magna eu, tincidunt felis.\n* Duis convallis enim ut faucibus volutpat.\n* Morbi condimentum sodales elit, et ornare velit sollicitudin sit amet.',
    },
  ],
};
