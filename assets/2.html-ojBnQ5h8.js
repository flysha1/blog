const e=JSON.parse('{"key":"v-897fffd8","path":"/devTools/git/2.html","title":"2. rebase、reset、revert区别？","lang":"zh-CN","frontmatter":{"date":"2018-02-01T00:00:00.000Z","category":["开发工具"],"tag":["git"]},"headers":[{"level":2,"title":"1. rebase","slug":"_1-rebase","link":"#_1-rebase","children":[]},{"level":2,"title":"2. reset","slug":"_2-reset","link":"#_2-reset","children":[]},{"level":2,"title":"3. revert","slug":"_3-revert","link":"#_3-revert","children":[]},{"level":2,"title":"区别总结","slug":"区别总结","link":"#区别总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"devTools/git/2.md","localizedDate":"2018年2月1日","excerpt":"<h1>2. rebase、reset、revert区别？</h1>\\n<h2>1. rebase</h2>\\n<p><code>git rebase</code> 用于将一个分支的提交移到另一个分支上，并重新应用这些提交。主要有两种用途：</p>\\n<ul>\\n<li>\\n<p><strong>整理提交历史</strong>：将多个小的提交合并成一个更为清晰的提交历史，避免不必要的历史混乱。</p>\\n</li>\\n<li>\\n<p><strong>将本地提交与远程同步</strong>：在拉取远程更改之前，通过 <code>rebase</code> 将本地提交移动到远程提交的后面，使历史更为干净。</p>\\n</li>\\n</ul>"}');export{e as data};