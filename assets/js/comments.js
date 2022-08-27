<script>
    function changeValue(elementName, newValue) {
        document.getElementsByName(elementName)[0].value=newValue;
        window.location.hash = "#comment-form";
    }

    function validateCommentCaptcha() {
        document.getElementById("comment-btn").disabled = false;
    }

    async function submitComment() {
        const form = document.getElementById('comment-form');
        const data = new URLSearchParams(new FormData(form));
        
        const opts = {
            method: 'POST',
            body: data
        };

        const baseUrl = "https://techblog-comments.herokuapp.com/v3/entry/github";
        const endpoint = baseUrl + "/321zer0/techblog/main/comments";

        alert('Thank you! Your comment has been submitted and will be published shortly :)');
        form.reset();
        document.getElementById('comment-submitted').animationName='fadeInCommentsDiag';

        await fetch(endpoint, opts).catch(err => {});
    }
</script>