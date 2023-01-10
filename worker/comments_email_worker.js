const queue = require('../config/kue');
const commentsMailer = require('../mailers/comments_mailers');
const { deleteOne } = require('../models/user');
queue.process('emails', function(job, done){
    console.log('emails works is processing a job', job.data);
    commentsMailer.newComment(job.data);
    done();
})