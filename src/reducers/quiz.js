import {
   shuffle,
   map,
   partial,
   take,
   zipObject,
   union,
   isEqual,
   clone,
   range,
   curry,
   property,
   propertyOf,
    head,
    difference,
    times,
    some
} from 'lodash';

import { compose } from 'lodash/fp';

const QUIZ_LIST_SIZE = 6;

const QUIZ_OPTIONS_SIZE = 4;

var randomKeys = curry((size, of) => take(shuffle(range(of)), size));

var rename = curry((keys, obj) => zipObject(['word', 'translate', 'options'], map(keys, propertyOf(obj))));

var getNth = curry((list, idx) => list[idx]);

const words = [
   {
      foreign  : 'please',
      native   : 'пожалуйста'
   },
   {
      foreign  : 'name',
      native   : 'имя'
   },
   {
      foreign  : 'what',
      native   : 'что, какой'
   },
   {
      foreign  : 'something',
      native   : 'что-нубудь'
   },
   {
      foreign  : 'people',
      native   : 'люди'
   },
   {
      foreign  : 'bowl',
      native   : 'миска'
   },
   {
      foreign  : 'cupboard',
      native   : 'сервант'
   },
   {
      foreign  : 'family',
      native   : 'семья'
   },
   {
      foreign  : 'job',
      native   : 'работа'
   },
   {
      foreign  : 'time',
      native   : 'время'
   },
   {
      foreign  : 'divide',
      native   : 'разделять'
   },
   {
      foreign  : 'weather',
      native   : 'погода'
   },
   {
      foreign  : 'immense',
      native   : 'огромный'
   },
   {
      foreign  : 'facilities',
      native   : 'оборудование'
   },
   {
      foreign  : 'purpose',
      native   : 'цель'
   },
   {
      foreign  : 'city',
      native   : 'город'
   },
   {
      foreign  : 'police',
      native   : 'полиция'
   },
   {
      foreign  : 'thing',
      native   : 'вещь'
   },
   {
      foreign  : 'quality',
      native   : 'качество'
   }
];


const _initState = {
    words: words,
    quiz: [],
    currentQuestion: {},
    selectedOption: undefined,
    isUserAnswered: false,
    userAnswers: [],
    isQuizEnded: false,
    userName: undefined
};


const quiz = (state = _initState, action) => {
   switch (action.type) {
       case 'LOGIN': 
           var userName = action.userName;
           if(userName == '') {
               userName = undefined;
           }
           var newState = Object.assign({}, state, {
             userName:               userName,
            }) 
           return newState
           
      case 'LOAD_FOREIGN_LIST':
         return Object.assign({}, state, {
             quiz:                   foreignList(state.words),
         })

      case 'SELECT_OPTION':
           return Object.assign({}, state, {
               selectedOption:        action.selectedOption
           });
           
       case 'ANSWER_ON_QUESTION': 
           if(state.selectedOption!==undefined) {
                var answer = {
                    questionIndex:       state.quiz.indexOf(state.currentQuestion),
                    userAnswer:          state.selectedOption,
                    isCorrect:           state.selectedOption === state.currentQuestion.translate,
                };
           return Object.assign({}, state, {
               isUserAnswered:      true,
               userAnswers:         [...state.userAnswers, 
                                        answer
                                    ],
               isQuizEnded:         state.userAnswers.length+1 == state.quiz.length
           })}
         
      case 'TO_NEXT_QUESTION':
            return Object.assign({}, state, {
                isUserAnswered:      false,
                currentQuestion:     nextQuestion(state),
                selectedOption:      undefined,
            })
                
     case 'PROCEED_TO_THE_QUESTION':
           return Object.assign({}, state, {
                    isUserAnswered:      some(state.userAnswers, ['questionIndex', action.index]),
                    currentQuestion:     state.quiz[action.index],
                    selectedOption:      undefined
                })
      default:
         return state
   }
}

export default quiz

function nextQuestion(state) {
    var answeredQuestionsIndexes = [];
    for(var i = 0; i<state.userAnswers.length; i++) {
        answeredQuestionsIndexes.push(state.userAnswers[i].questionIndex);
    }
    return state.quiz[head(difference(times(QUIZ_LIST_SIZE, Number), answeredQuestionsIndexes))];
    }
        
function _randomWordsWith(data, size, handle, include) {
   return shuffle(union([handle(include)], _randomWords(data, size - 1, handle, include)));
}

function _randomWords(data, size, handle, exclude) {
   const predicate = partial(isEqual, exclude);

   const iterator = compose(handle, getNth(data));

   return map(randomKeys(size, data.length), iterator);
}

function _detectOptions(data, key, word) {
   word.options = _randomWordsWith(data, QUIZ_OPTIONS_SIZE, property(key), word);
   return word;
}

function foreignList(data) {
   const addOptions = partial(_detectOptions, data, 'native');
   const renameKeys = rename(['foreign', 'native', 'options']);
   const flow = compose(renameKeys, addOptions, clone);

   const words = _randomWords(data, QUIZ_LIST_SIZE, flow);

   return words;
}

