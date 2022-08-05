export default function videoReducer(state = [], action) {
   const data = action.payload;
   switch (action.type) {
      case "ADD_VIDEO":
         return [...state, data];
      default:
         return;
   }
}
