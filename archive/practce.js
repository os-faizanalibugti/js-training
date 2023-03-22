const obj = {
  teacher: "Kyle",
  ask: function (question) {
    console.log(this.teacher, question);
  },
};

obj.ask.call({teacher: 'Faizan'}, 'Hello');
