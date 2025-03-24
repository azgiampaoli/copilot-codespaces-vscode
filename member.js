function skillsMember() {
    
    function newFunction() {
        var skills = document.getElementById('skills');
        var member = document.getElementById('member');
        var memberValue = member.value;
        if (memberValue === '1') {
            skills.style.display = 'block';
        } else {
            skills.style.display = 'none';

        }
    }
}