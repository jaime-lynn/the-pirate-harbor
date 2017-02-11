var fs = new FormService()


Vue.component('submit', {
    data: function () {
        return {
            title: '',
            content: '',
            uploadType: '',
            author: {
                username: "Rachel",
                password: "IhearBananas",
                _id: "123khj234"
            },
        }
    },
    methods: {
        submit: function () {
            debugger
            fs.submit(title, content, type, author)
        }
    },
    template: `
<div class="row">
    <form @submit.prevent="submit" class="col s12">
        <div class="row">
            <div class="input-field col s12">
                <input placeholder="Title" v-model="title" type="text" id="title">
                <label for="title"> Title </label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input placeholder="Content" v-model="content" type="text" id="content">
                <label for="content"> Content </label>
            </div>
        </div>
        <p> Type of Content </p>
      
        <div>
        <input value="image" name="type" id="type1" type="radio" v-model="uploadType"/>
        <label for="type1">Image</label>
        </div>
        <div>
        <input value="question" name="type" id="type2"  type="radio" v-model="uploadType"/>
        <label for="type2">Question</label>
        </div>
        <div>
        <input value="link" name="type" id="type3"  type="radio" v-model="uploadType"/>
        <label for="type3">Link</label>
        </div>
       
        <a  class="waves-effect waves-light btn">Submit</a>
    </form>
</div>
`
})