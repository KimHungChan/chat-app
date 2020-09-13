const chatData = [
  {
    from: 'self',
    to: 'Samuel Green',
    type: 'text',
    message: "That sounds great. I'd be happy to discuss more.",
  },
  {
    from: 'self',
    to: 'Samuel Green',
    type: 'text',
    message: 'Could you send over some pictures of your dog, please?',
  },
  {
    from: 'Samuel Green',
    to: 'self',
    type: 'image',
    images: ['dog-image-1.jpg', 'dog-image-2.jpg', 'dog-image-3.jpg'],
    newChatBlock: true, //for when the current and last 'from' and 'to' have switched
  },
  {
    from: 'Samuel Green',
    to: 'self',
    type: 'text',
    message: "Here are a few pictures. She's a happy girl",
  },
  {
    from: 'Samuel Green',
    to: 'self',
    type: 'text',
    message: 'Can you make it?',
  },
  {
    from: 'self',
    to: 'Samuel Green',
    type: 'text',
    message:
      'She looks so happy! The time we discussed works. How long shall I take her out for?',
    newChatBlock: true, //for when the current and last 'from' and 'to' have switched
  },
  {
    from: 'self',
    to: 'Samuel Green',
    type: 'selection',
    message: '30 minute walk',
    price: 29,
  },
  {
    from: 'self',
    to: 'Samuel Green',
    type: 'selection',
    message: '1 hour walk',
    price: 49,
  },
];

export default chatData;
